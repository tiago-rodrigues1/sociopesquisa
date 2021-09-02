import Image from "next/image";

import { Mail } from "react-feather";

export function CardIntegrante(props) {
	return (
		<div className="w-full h-auto sm:max-w-min bg-main-light rounded-2xl border border-primary-light flex flex-col justify-center items-center p-6 gap-4">
			<div>
				<Image
					src={props.foto}
					alt={props.nome}
					width={64}
					height={64}
					className="rounded-full"
				/>
			</div>
			<div className="flex flex-col gap-2 text-center items-center justify-center">
				<h2 className="text-colorText-primary text-lg font-semibold">
					{props.nome}
				</h2>
				<p className="text-colorText-primary flex gap-2 sm:gap-4 items-center justify-center">
					<Mail className="h-4 sm:h-6 w-4 sm:w-6" />
					<span className="text-sm sm:text-base">{props.email}</span>
				</p>
			</div>
		</div>
	);
}
