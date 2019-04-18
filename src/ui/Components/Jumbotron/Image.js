import styled from 'styled-components'

const Background = styled.div`

	background-color: #a6adb4;
	display: flex;
	align-items: center;

	@media (min-width: 1000px) {
		height: 600px;
		max-width: 1200px;
	}

	@media (min-width: 980px) {
		height: 600px;
		min-width: 860px;
	}

	@media (min-width: 768px) and (max-width: 979px) {
		height: 400px;
		min-width: 768px;
	}

	@media (max-width: 480px) {
		height: 388px;
		min-width: 375px;
	}
`

const Content = styled.div`
	@media (min-width: 980px) {
		height: 253px;
		min-width: 600px;
		padding-top: 80px;
		padding-bottom: 75px;
		padding-left: 80px;
		padding-right: 80px;
	}

	@media (min-width: 768px) and (max-width: 979px) {
		height: 242px;
		min-width: 608px;

		padding-top: 80px;
		padding-bottom: 75px;
		padding-left: 80px;
		padding-right: 80px;
	}

	@media (max-width: 480px) {
		padding-top: 40px;
		padding-bottom: 40px;
		padding-left: 24px;
		padding-right: 24px;
	}
`
const H1 = styled.h1`
	color: #ffffff;
	font-family: 'Helvetica';
	font-size: 24px;
	font-weight: bold;
`
const P = styled.p`
	color: #ffffff;
	font-family: 'Helvetica';
	font-size: 16px;
`

export const LandImage = { Background, Content, H1, P }
