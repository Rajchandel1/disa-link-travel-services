export interface NavLink {
    label: string;
    href: string;
}

export interface StatCardProps {
    title: string;
    subtitle: string;
    bgColor: string;
    textColor?: string;
}

export interface BlogPost {
    category: string;
    tag: string;
    date: string;
    title: string;
    image: string;
}