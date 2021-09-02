import Head from "next/head";
import Image from "next/image";

import { GitHub } from "react-feather";

import { CardIntegrante } from "../components/CardIntegrante";

export default function Home() {
	return (
		<div className="min-h-screen h-full w-screen font-sans bg-main">
			<Head>
				<title>SocioPesquisa</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex-1 min-h-screen h-full w-full flex flex-col sm:flex-row">
				<section className="sm:w-2/3 h-full p-6 flex flex-col items-center justify-evenly">
					<header className="self-start flex flex-col gap-2 text-colorText-primary">
						<h1 className="font-bold text-2xl sm:text-3xl">
							SocioPesquisa
						</h1>
						<h2>Indústria cultural e Cultura de massa</h2>
					</header>
					<div className="">
						<Image
							src="/images/indexImage.svg"
							alt="imagem de pessoa pesquisando"
							height={462}
							width={360}
						/>
					</div>
					<div className="sm:hidden flex flex-col gap-6 items-center justify-center p-4">
						<p className="max-w-full text-lg font-semibold text-colorText-primary leading-relaxed">
							Colobore com nosso trabalho clicando no botão abaixo
						</p>
						<a
							href="#"
							className="bg-primary text-center text-colorText-primary py-4 w-full duration-300 hover:bg-primary-dark rounded-2xl font-bold"
						>
							Acessar formulário
						</a>
					</div>
				</section>
				<section className="hidden sm:flex flex-col gap-6 flex-1 w-1/3 min-h-full bg-main-mediumDark items-center p-6">
					<div className="py-10 h-full flex flex-col gap-6 items-center justify-between">
						<p className="max-w-full text-lg sm:text-2xl text-colorText-primary leading-relaxed">
							Colobore com nosso trabalho clicando no botão abaixo
						</p>
						<a
							href="#"
							className="bg-primary text-center py-4 w-full duration-300 hover:bg-primary-dark rounded-2xl font-bold text-colorText-primary"
						>
							Acessar formulário
						</a>
					</div>
				</section>
			</main>
			<footer className="h-auto w-full p-6 sm:px-0 bg-main-mediumDark sm:bg-main-dark flex flex-col gap-6">
				<h1 className="text-colorText-primary font-bold text-lg pl-6">
					Componentes
				</h1>
				<section className="flex flex-col sm:flex-row items-center lg:justify-evenly gap-6  sm:gap-0 md:overflow-y-scroll lg:overflow-y-hidden sm:px-8">
					<CardIntegrante
						nome="Gabrielly Brandão"
						foto="/images/integrantes/gaby-profile.jpg"
						email="gabrielly.n@escolar.ifrn.edu.br"
					/>
					<CardIntegrante
						nome="Kauan Farias"
						foto="/images/integrantes/kauan-profile.jpg"
						email="kauan.f@escolar.ifrn.edu.br"
					/>
					<CardIntegrante
						nome="Tiago Rodrigues"
						foto="/images/integrantes/tiago-profile.jpg"
						email="tiago.r@escolar.ifrn.edu.br"
					/>
				</section>
				<a
					href="https://github.com/tiago-rodrigues1"
					className="text-colorText-secondary hover:underline flex gap-4 items-center justify-center"
				>
					<GitHub />
					<span>© Tiago Rodrigues - 2021</span>
				</a>
			</footer>
		</div>
	);
}
