import { UserCircle, SignOut } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { signOut } from "../lib/auth-client";

export function NavUser({
  user,
}: {
  user: {
    email: string;
    name?: string | null;
    image?: string | null;
  } | null;
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Get user initials for fallback
  const getInitials = () => {
    if (user?.name) {
      const userName = user.name;
      const names = userName.split(" ");
      if (names.length >= 2) {
        const firstName = names[0];
        const lastName = names[names.length - 1];
        if (firstName && lastName) {
          return `${firstName[0]}${lastName[0]}`.toUpperCase();
        }
      }
      return userName.substring(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return "GU";
  };

  const displayName = user?.name || user?.email?.split("@")[0] || "Guest";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.image || undefined} alt={displayName} />
                <AvatarFallback>
                  {isCollapsed ? (
                    <UserCircle className="h-4 w-4" weight="duotone" />
                  ) : (
                    <span className="text-xs font-medium">{getInitials()}</span>
                  )}
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{displayName}</span>
                  {user?.email && user?.name && (
                    <span className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  )}
                </div>
              )}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem onClick={() => signOut()}>
              <SignOut className="h-4 w-4" weight="duotone" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
