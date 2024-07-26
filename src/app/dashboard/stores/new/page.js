import FormNewStore from "@/components/FormNewStore";
import { Separator } from "@/components/ui/separator";
import { authUserGithub } from "@/libs/auth";

const NewStore = async () => {
    const authUser = await authUserGithub()
    const email = authUser?.email
    return (
        <div>
            <div className="space-y-0.5">
                <h2 className="text-3xl font-bold tracking-tight text-color-accent2">New Store</h2>
                <p className="text-muted-foreground">
                    Add a new store to your account
                </p>
            </div>
            <Separator className="w-[90vw] lg:w-[73vw] max-sm:w-[80vw] md:none my-3" />
            <div className="p-5 border rounded-xl">
                <h2 className="text-color-accent2 font-bold text-xl my-3">Add Store</h2>
                <p className="text-muted-foreground">
                    Add a new store to your account
                </p>
                <div className="mt-5">
                    <FormNewStore email={email} />
                </div>
            </div>
        </div>
    );
};

export default NewStore;
