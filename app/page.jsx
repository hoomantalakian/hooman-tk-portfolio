'use client'
import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
//
export default function Home() {
    //
    return (
        <MainLayout>
            {/* Banner */}
            <section
                id="home-banner"
                className="flex items-center justify-center gap-10 max-md:flex-col-reverse"
            >
                <Image
                    src="/my-face.jpg"
                    alt="my face"
                    width={500}
                    height={500}
                    className="w-[20rem] max-w-full border-[4px] border-primary-medium lg:w-[30rem]"
                ></Image>
                {/* Text Box */}
                <div
                    id="banner_text"
                    className="flex min-w-fit max-w-xl shrink-0 flex-col"
                >
                    <h1 id="my-name" className="mb-5">
                        I&apos;m{' '}
                        <span className="text-6xl font-extrabold text-gray-200 lg:text-8xl">
                            Hooman
                            <br />
                            Talakian,
                        </span>
                    </h1>
                    <p>
                        a professional{' '}
                        <span className="bold-span">Music Producer</span>,
                        <br />a dedicated{' '}
                        <span className="bold-span">Educator</span>,
                        <br />a focused{' '}
                        <span className="bold-span">Programmer</span> and
                        <br />a flexible{' '}
                        <span className="bold-span">Creative Leader</span>.
                    </p>
                </div>
            </section>
        </MainLayout>
    )
}
