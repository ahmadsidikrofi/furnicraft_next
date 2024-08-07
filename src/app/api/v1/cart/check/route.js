import { authUserGithub } from "@/libs/auth";

export async function GET () {
    const authUser = await authUserGithub()
    if (authUser) return Response.json({ status: 200, user: authUser })
    else return Response.json({ status: 401, message: "Not authenticated" })
}