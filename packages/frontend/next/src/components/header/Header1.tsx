export default function Header1() {
	return (
		<header>
			<div className="container bg-[#616161] py-2 flex justify-between items-center">
				<div className="logo">RapidStack</div>
				<ul className="flex gap-4">
					<li className="cursor-pointer">Home</li>
					<li className="cursor-pointer">About</li>
					<li className="cursor-pointer">Features</li>
					<li className="cursor-pointer">Pricing</li>
					<li className="cursor-pointer">Contact</li>
				</ul>
				<div className="flex gap-2">
					<button>Login</button>
					<button className="btn p-2 rounded-md bg-blue-500">
						Get Started
					</button>
				</div>
			</div>
		</header>
	);
}