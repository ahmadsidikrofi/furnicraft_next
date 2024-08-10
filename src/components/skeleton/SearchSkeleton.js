import { Skeleton } from "../ui/skeleton"
import { CommandGroup, CommandItem } from "@/components/ui/command"

const SearchSkeleton = () => {
    return ( 
        <>
            <CommandGroup heading={<Skeleton className="h-3 w-32" />}>
                <div className="hover:bg-accent hover:text-accent-foreground">
                    <CommandItem>
                        <Skeleton className="h-8 w-full" />
                    </CommandItem>
                    <CommandItem>
                        <Skeleton className="h-8 w-full" />
                    </CommandItem>
                </div>
            </CommandGroup>
        </>
    )
}
 
export default SearchSkeleton;