import styled from 'styled-components'

const Basic = styled.button`
	border: none;
	border-radius: 8px;

	font-family: 'Helvetica';
	font-size: 11px;
	font-weight: bold;

	width: 152px;
	height: 40px;
`
const Primary = styled(Basic)`
	background: #fa6980;
	color: #ffffff;
`
const Default = styled(Basic)`
	border: solid;
	border-width: 2px;
	border-color: #fa6980;

	color: #fa6980;
`

export const Button = {
	Primary,
	Default
}
