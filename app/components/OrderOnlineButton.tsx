import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OrderOnlineButtonProps {
  options?: {
    onClick?: () => void; // Optional click handler
  };
}

export default function OrderOnlineButton({ options }: OrderOnlineButtonProps) {
  return (
    <div className="flex justify-end">
      <Button
        className="px-8 py-4 text-lg font-bold w-full md:w-auto"
        asChild
        onClick={options?.onClick}
      >
        <Link href="https://orders.cake.net/09000339">Order Online</Link>
      </Button>
    </div>
  );
}