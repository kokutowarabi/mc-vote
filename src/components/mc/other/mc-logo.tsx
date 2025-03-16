import Image from "next/image";

export default function MCLogo() {
    return (
        <div className={`fixed hidden lg:block top-20 left-0 w-[25vw] max-w-[360px]`}>
            <div
                className="relative mb-2 inline-block w-full aspect-[12/7]"
            >
                <Image
                    src={'/mc/logo.svg'}
                    alt="ロゴ"
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-[#E07494] text-center font-bold text-[1.5vw]">
                明大祭のチャンピオンに
                <br />
                輝くのは一体誰だ！
            </h3>
        </div>
    );
}
