import { auth, clerkClient } from "@clerk/nextjs/server"

export async function POST(request: Request) {
  const { isAuthenticated, userId, orgId } = await auth()

  if (!isAuthenticated || !userId || !orgId) {
    return new Response("Unauthorized", { status: 401 })
  }

  const { userIds } = (await request.json()) as { userIds?: unknown }

  if (!Array.isArray(userIds) || !userIds.every((id) => typeof id === "string")) {
    return Response.json({ error: "Invalid userIds" }, { status: 400 })
  }

  if (userIds.length === 0) {
    return Response.json([])
  }

  const client = await clerkClient()
  const { data } = await client.users.getUserList({
    userId: userIds,
    organizationId: [orgId],
    limit: Math.min(userIds.length, 100),
  })

  const usersById = new Map(data.map((user) => [user.id, user]))

  const users = userIds.map((id) => {
    const user = usersById.get(id)
    if (!user) return null

    return {
      name:
        user.fullName ??
        user.username ??
        user.primaryEmailAddress?.emailAddress ??
        "Anonymous",
      avatar: user.imageUrl,
    }
  })

  return Response.json(users)
}
