import { OrganizationMembershipRole } from "@prisma/client";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { LucideIcon } from "lucide-react";

export type NavigationGroup = {
  title: string;
  roles?: OrganizationMembershipRole[];
  links: NavigationLink[];
  defaultOpenStartPath?: string;
};

export type NavigationLink = {
  href: string;
  Icon:
    | React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
      >
    | LucideIcon;
  label: string;
  roles?: OrganizationMembershipRole[];
  hidden?: boolean;
};
