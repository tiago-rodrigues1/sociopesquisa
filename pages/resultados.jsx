import Head from "next/head";

import { Chart } from "react-google-charts";

export default function Resultados() {
	const dataChart1 = [
		["Respostas", "Quantidade"],
		["Vantagens", 8],
		["Desvantagens", 2],
	];

	const dataChart2 = [
		["Respostas", "Quantidade"],
		["Sim", 8],
		["Não", 2],
	];

	const dataChart3 = [
		["Respostas", "Quantidade"],
		["Sim", 10],
	];

	const dataChart4 = [
		["Respostas", "Quantidade"],
		["Muito pouco", 0],
		["Pouco", 2],
		["Médio", 6],
		["Bastante", 2],
	];

	return (
		<div className="min-h-screen h-full w-screen font-sans bg-main grid place-items-center">
			<Head>
				<title>Resultados</title>
			</Head>
			<main className="p-6 sm:p-12 flex flex-col gap-8">
				<header>
					<h1 className="font-bold text-2xl text-colorText-primary">
						SocioPesquisa - Resultados
					</h1>
				</header>
				<section className="flex flex-col gap-12 items-center justify-center w-full">
					<article className="w-full flex flex-col gap-8">
						<header className="w-full flex flex-col gap-4">
							<h2 className="text-colorText-primary font-bold text-lg">
								Pergunta 01
							</h2>
							<p className="text-colorText-primary leading-relaxed">
								Como sabemos, a Indústria cultural tem seus
								pontos negativos (como a "produtificação" do
								invíduo) e seus pontos positivos (como tornar
								acessível os elementos de várias culturas para o
								mundo todo). Levando em consideração a afirmação
								acima e outros tópicos estudados em sala de
								aula, você acha que a Indústria cultural traz
								mais vantagens ou desvantagens para a nossa
								sociedade ?
							</p>
						</header>
						<div className="w-full sm:w-1/2 h-2/4 rounded-2xl bg-white p-2">
							<Chart
								width={"100%"}
								height={"100%"}
								chartType="PieChart"
								data={dataChart1}
							/>
						</div>
					</article>
					<article className="flex flex-col gap-8 w-full">
						<header className="w-full flex flex-col gap-4">
							<h2 className="text-colorText-primary font-bold text-lg">
								Pergunta 02
							</h2>
							<p className="text-colorText-primary leading-relaxed">
								Você já se sentiu pressionado a fazer algo
								influenciado pela mídia ?
							</p>
						</header>
						<div className="w-full sm:w-1/2 h-2/4 rounded-2xl bg-white p-2">
							<Chart
								width={"100%"}
								height={"100%"}
								chartType="PieChart"
								data={dataChart2}
							/>
						</div>
					</article>
					<article className="flex flex-col gap-8 w-full">
						<header className="w-full flex flex-col gap-4">
							<h2 className="text-colorText-primary font-bold text-lg">
								Pergunta 03
							</h2>
							<p className="text-colorText-primary leading-relaxed">
								Você já sentiu insatisfeito com algo que tem/é
								por causa das imposições da mídia ?
							</p>
						</header>
						<div className="w-full sm:w-1/2 h-2/4 rounded-2xl bg-white p-2">
							<Chart
								width={"100%"}
								height={"100%"}
								chartType="PieChart"
								data={dataChart3}
							/>
						</div>
					</article>
					<article className="flex flex-col gap-8 w-full">
						<header className="w-full flex flex-col gap-4">
							<h2 className="text-colorText-primary font-bold text-lg">
								Pergunta 04
							</h2>
							<p className="text-colorText-primary leading-relaxed">
								Qual peso que a mídia tem na forma como você se
								vê ?
							</p>
						</header>
						<div className="w-full sm:w-1/2 h-2/4 rounded-2xl bg-white p-2">
							<Chart
								width={"100%"}
								height={"100%"}
								chartType="PieChart"
								data={dataChart4}
							/>
						</div>
					</article>
				</section>
			</main>
		</div>
	);
}
