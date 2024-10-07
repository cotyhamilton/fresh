import { Input } from "@/islands/ui/input.tsx";
import { Search } from "lucide-preact";
import { ModeToggle } from "@/islands/mode-toggle.tsx";

export default function Navbar() {
  return (
    <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a
          href="/"
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          🍋
        </a>
        <a
          href="#"
          class="text-foreground transition-colors hover:text-foreground"
        >
          One
        </a>
        <a
          href="#"
          class="text-muted-foreground transition-colors hover:text-foreground"
        >
          Two
        </a>
        <a
          href="#"
          class="text-muted-foreground transition-colors hover:text-foreground"
        >
          Three
        </a>
      </nav>
      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <ModeToggle />
      </div>
    </header>
  );
}
