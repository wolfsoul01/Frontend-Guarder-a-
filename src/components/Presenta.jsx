export default function Present(){


    return(
        <section className="max-w-xl mx-auto md:max-w-5xl p-5">
            <div className="flex flex-col md:flex-row items-center mt-12">
			<div data-aos="fade-right" className="md:w-5/12 ">
				<h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32"><span className="text-yellow-500 block">Sobre  </span>Nosotros</h1>


				<p className=" lg:pr-14 font-semibold opacity-80">En [] entendemos que los primeros años son fundamentales para el desarrollo integral del niño. Es por esto que proveemos un ambiente estimulante a través del juego, donde potenciamos sus habilidades sociales, motrices y creativas.</p>

				<p className="my-5 lg:pr-14 font-semibold opacity-80">Con capacidad para 30 niños de 1 a 5 años, contamos con amplias y seguras instalaciones equipadas especialmente para ellos.</p>

				<p className="lg:pr-14 font-semibold opacity-80">¿Buscas un lugar que cuide con <span className="text-yellow-500 uppercase">amor</span> y <span className="text-yellow-500 uppercase">paciencia</span> el crecimiento de tu hijo? Visítanos y conoce nuestra propuesta educativa.</p>
			</div>
			<img data-aos="fade-left" className="md:w-7/12" src="/img/des.png"/>
		</div>
        </section>
    )
}