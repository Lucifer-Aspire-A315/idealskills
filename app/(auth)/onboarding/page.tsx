import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
    const user = await currentUser();
    const userinfo = {};
    const userData = {
        id: user?.id,
        objectId: userinfo?._id,
        username: userinfo?.username || user?.username,
        name: userinfo?.name || user?.firstName || "",
        bio: userinfo?.bio || "",
        image: userinfo?.image || user?.imageUrl,
    }
    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2"> Complete your profile now to use Ideal Skills</p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile
                    user={userData} btnTitle="continue"
                />
            </section>
        </main>
    )
}

export default Page;