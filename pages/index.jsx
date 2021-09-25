import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { GitHub } from "react-feather";

import { CardIntegrante } from "../components/CardIntegrante";

export default function Home() {
	return (
		<div className="min-w-screen min-h-screen font-sans bg-main grid">
			<Head>
				<title>SocioPesquisa</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-full min-w-full grid sm:grid-cols-3">
				<header className="p-6 sm:p-12 h-full sm:col-span-2 flex flex-col gap-12 md:gap-14 lg:gap-16 xl:gap-24">
					<div className="text-colorText-primary flex flex-col gap-4">
						<h1 className="font-bold text-2xl sm:text-3xl">
							SocioPesquisa
						</h1>
						<h2 className="text-lg sm:text-xl">
							Indústria cultural e Cultura de massa
						</h2>
					</div>
					<Image
						src="/images/indexImage.svg"
						alt="Imagem de pesquisador"
						width={309.76}
						height={220}
						layout="responsive"
					/>
				</header>
				<main className="p-6 sm:py-12 sm:bg-main-mediumDark sm:col-span-1 w-full h-auto flex flex-col items-center justify-between gap-12 sm:gap-0">
					<p className="text-center text-colorText-primary font-bold text-lg sm:text-xl leading-relaxed">
						Colobore com nosso trabalho acessando o formulário
						abaixo
					</p>
					<div className="w-full flex flex-col gap-6 sm:gap-8 items-center justify-center font-bold">
						<a
							href="https://forms.gle/8TJHxsMQygSM1jN99"
							className="text-center text-colorText-primary  p-4 w-full rounded-2xl flex items-center justify-center bg-primary-dark duration-200 hover:bg-primary "
						>
							Acessar Formulário
						</a>
						<Link href="/resultados">
							<a className="text-center text-primary p-4 w-full rounded-2xl bg-transparent flex items-center justify-center border-2 border-primary duration-200 hover:bg-primary hover:bg-opacity-30">
								Ver resultados
							</a>
						</Link>
					</div>
				</main>
			</div>
		</div>
	);
}
