import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { authUserGithub } from "@/libs/auth";
import prisma from "@/libs/prisma";
import StoreCard from "@/components/StoreCard";

const StoresPage = async () => {
  const authUser = await authUserGithub()
  const userStores = await prisma.Store?.findMany({
    where: { user_email: authUser?.email },
    orderBy: { id: 'desc' }
  })
  return (
    <div>
      <div className="space-y-0.5 px-6 flex justify-between items-center lg:w-[73vw]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-color-accent2">Stores</h2>
          <p className="text-muted-foreground">
            Manage your store here.
          </p>
        </div>
        <div>
          {userStores.length < 1 ? null :
            <Link href="/dashboard/stores/new">
              <Button className="rounded-full p-3 text-color-primary bg-color-accent2">Create store</Button>
            </Link>
          }
        </div>
      </div>
      <Separator className="w-[90vw] lg:w-[73vw] max-sm:w-[80vw] md:none my-3" />
      {userStores.length > 0 ? (
        <div className="mx-5 grid sm:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[71vw]">
          <StoreCard userStores={userStores} />
        </div>
      ) : (
        <div className="mx-5 my-10">
          <h2 className="text-color-accent2 font-medium text-xl my-3">You don&apos;t have any store</h2>
          <Link href="/dashboard/stores/new">
            <Button className="rounded-full p-3 text-color-primary bg-color-accent2">Create a new store</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default StoresPage;
