// Dependencies
import { MagnifyingGlassPlus } from 'phosphor-react';
import React from 'react';

// Assets
import cs from '../../assets/cs.png';
import fortnite from '../../assets/fortnite.png';
import dota from '../../assets/dota.png';
import logo from '../../assets/logo.svg';
import lol from '../../assets/lol.png';
import wow from '../../assets/wow.png';

// Styles
import { Container } from './home.styles';



const App: React.FC = () => {
	return (
		<Container>
			<img className='logo' src={logo} alt="" />

			<p>Seu <span>duo</span> está aqui.</p>

			<div className='carousel'>
				<a href="">
					<img src={cs} alt="" />

					<div className='card-content'>
						<p className='card-title'>League of Legends</p>
						<span className='card-description'>4 anúncios</span>
					</div>
				</a>

				<a href="">
					<img src={wow} alt="" />

					<div className='card-content'>
						<p className='card-title'>League of Legends</p>
						<span className='card-description'>4 anúncios</span>
					</div>
				</a>

				<a href="">
					<img src={dota} alt="" />

					<div className='card-content'>
						<p className='card-title'>League of Legends</p>
						<span className='card-description'>4 anúncios</span>
					</div>
				</a>

				<a href="">
					<img src={lol} alt="" />

					<div className='card-content'>
						<p className='card-title'>League of Legends</p>
						<span className='card-description'>4 anúncios</span>
					</div>
				</a>

				<a href="">
					<img src={fortnite} alt="" />

					<div className='card-content'>
						<p className='card-title'>League of Legends</p>
						<span className='card-description'>4 anúncios</span>
					</div>
				</a>
			</div>

			<div>
				<div>
					<h1>Não encontrou seu duo?</h1>
					<p>Publique um anúncio para encontrar novos players!</p>
				</div>

				<button>
					<MagnifyingGlassPlus />
					Publicar anúncio
				</button>
			</div>
		</Container>
	);
}

export default App;