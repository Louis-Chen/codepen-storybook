import styled from 'styled-components'

const Background = styled.div`
	background-color: #ffffff;
	@media (min-width: 980px) {
		max-height: 600px;
		max-width: 580px;
		padding-top: 100px;
		padding-bottom: 100px;
		padding-left: 80px;
		padding-right: 80px;
	}

	@media (min-width: 768px) and (max-width: 979px) {
		min-height: 343px;
		min-width: 768px;

		padding-top: 40px;
		padding-bottom: 40px;
		padding-left: 80px;
		padding-right: 80px;
	}

	@media (max-width: 480px) {
		min-height: 327px;

		padding-top: 30px;
		padding-bottom: 30px;
		padding-left: 25px;
		padding-right: 25px;
	}
`

const Content = styled.div`
	max-height: 343px;
`
const Header = styled.h1`
	font-family: 'Helvetica';
	font-size: 24px;
	font-weight: bold;
`
const Hr = styled.hr`
	height: 2px;
	border: none;
	border-top: 3px solid #ebeded;
	margin-top: 30px;
	margin-bottom: 30px;
`
const Title = styled.h2`
	color: #fa6980;
	font-family: 'Helvetica';
	font-size: 16px;
	font-weight: bold;
`

const SubTitle = styled(Title)`
	color: #000000;
`
const Text = styled.p`
	color: #a6adb4;
	font-family: 'Acumin Pro';
	font-size: 16px;
`
export const TextCard = { Background, Content, Header, Hr, Title, SubTitle, Text }
