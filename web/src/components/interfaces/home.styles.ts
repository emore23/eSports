import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	.logo {
		margin: 80px 0;
	}

	p {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 900;
		font-size: 64px;
		line-height: 77px;
		letter-spacing: -1.43px;
		color: #FFFFFF;

		span {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 900;
			font-size: 64px;
			line-height: 77px;
			letter-spacing: -1.43px;
			background: linear-gradient(21.86deg,#9572FC 32.08%,#43E7AD 75.94%,#E1D55D -17.43%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	.carousel {
		display: flex;
		flex-direction: row;
		margin-top: 64px;

		a {
			display: block;
			position: relative;
	
			.card-content {
				display: flex;
				flex-direction: column;
				align-items: self-start;
    		justify-content: flex-end;
				background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
				border-radius: 0px 0px 8px 8px;
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				height: 120px;
				padding: 16px;
				
				.card-title {
					font-family: 'Inter';
					font-style: normal;
					font-weight: 700;
					font-size: 16px;
					line-height: 19px;
					letter-spacing: -0.18px;
					color: #FFFFFF;
					text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				}
		
				.card-description {
					margin-top: 4px;
					font-family: 'Inter';
					font-style: normal;
					font-weight: 400;
					font-size: 14px;
					line-height: 17px;
					letter-spacing: -0.18px;
					color: #D4D4D8;
					text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				}
			}
		}
		a + a {
			margin-left: 24px;
		}
	}

`;
