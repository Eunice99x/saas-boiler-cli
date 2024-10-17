import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../ui/button/Button";
import Icon from "../ui/icon/Icon";
import Image from "next/image";

export default function Header1() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="w-full flex justify-between items-center py-2 pb-3 fixed top-0 z-50 bg-background-transparent shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] after:w-[90%] after:h-[0.5px] after:bg-white after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:translate-y-[-100%] after:z-10 after:content-[''] after:transition-all after:duration-300 after:ease-in-out px-10 max-[600px]:px-2 max-[600px]:!w-screen">
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="logo" width={150} height={50} />
        </a>
      </Link>
      <nav className="bg-background-transparent py-2 px-24 flex gap-10 items-center justify-center max-md:hidden max-[850px]:px-10 rounded-[8px]">
        <Link href="/">
          <a
            className={`cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold ${
              router.pathname === "/"
                ? "font-bold border-b-2 border-primary-light"
                : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/services">
          <a className="cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold transition-all">
            Services
          </a>
        </Link>
        <Link href="/about">
          <a className="cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold transition-all">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="cursor-pointer text-primary-light text-[15px] font-light hover:border-b-2 hover:border-primary-light hover:font-bold transition-all">
            Contact
          </a>
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="text-primary-light bg-transparent min-w-[120px] min-h-[40px]"
        >
          Reserve Now
        </Button>
        <Icon
          className="hidden max-md:block cursor-pointer"
          name="material-symbols:event-list-outline-rounded"
          style={{ color: "white" }}
          size="30"
        />
      </div>
    </div>
  );
}
