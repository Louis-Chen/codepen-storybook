import React from 'react'
import styled from 'styled-components'
import { LandImage } from './Image'
import { TextCard } from './TextCard'
import { Button } from '../../Elements/Button'
import { Row, Col } from 'react-styled-flexboxgrid'

export const JumbotronImage = () => {
	return (
		<LandImage.Background>
			<LandImage.Content>
				<LandImage.H1>WORLD NEWS</LandImage.H1>
				<hr />
				<LandImage.H1>Subtitle article header.</LandImage.H1>
				<LandImage.P>
					Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert
					detraxit voluptatum vis eu, inermis eloquentiam.
				</LandImage.P>
				<Button.Primary>LEARN MORE</Button.Primary>
			</LandImage.Content>
		</LandImage.Background>
	)
}

export const JumbotronText = () => {
	return (
		<TextCard.Background>
			<TextCard.Header>MORE NEWS</TextCard.Header>
			<TextCard.Hr />
			<Row>
				<TextCard.Content as={Col} lg={12} md={12} sm={6} xs={12}>
					<TextCard.Title>TITLE</TextCard.Title>
					<TextCard.SubTitle>Subtitle</TextCard.SubTitle>
					<TextCard.Text>
						Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert
						detraxit voluptatum vis eu, inermis eloquentiam.
					</TextCard.Text>
					<svg xmlns="http://www.w3.org/2000/svg" width="84" height="16" viewBox="0 0 84 16">
						<g id="time" transform="translate(-1300 -374)">
							<text
								id="_2_min_ago"
								data-name="2 min ago"
								transform="translate(1326 376)"
								fill="#a6adb4"
								font-size="13"
								font-family="Helvetica-Oblique, Helvetica"
								font-style="oblique"
							>
								<tspan x="0" y="10">
									2 min ago
								</tspan>
							</text>
							<g id="time-2" data-name="time" transform="translate(1026 -624)">
								<path
									id="Path_5"
									data-name="Path 5"
									d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6.018,6.018,0,0,1,8,14ZM9,7.6l2.7,2.7-1.4,1.4L7,8.4V3H9Z"
									transform="translate(274 998)"
									fill="#cbd0d3"
								/>
							</g>
						</g>
					</svg>
				</TextCard.Content>
				<TextCard.Content as={Col} lg={12} md={12} sm={6} xs={12}>
					<TextCard.Title>TITLE</TextCard.Title>
					<TextCard.SubTitle>Subtitle</TextCard.SubTitle>
					<TextCard.Text>
						Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert
						detraxit voluptatum vis eu, inermis eloquentiam.
					</TextCard.Text>
					<svg xmlns="http://www.w3.org/2000/svg" width="84" height="16" viewBox="0 0 84 16">
						<g id="time" transform="translate(-1300 -374)">
							<text
								id="_2_min_ago"
								data-name="2 min ago"
								transform="translate(1326 376)"
								fill="#a6adb4"
								font-size="13"
								font-family="Helvetica-Oblique, Helvetica"
								font-style="oblique"
							>
								<tspan x="0" y="10">
									2 min ago
								</tspan>
							</text>
							<g id="time-2" data-name="time" transform="translate(1026 -624)">
								<path
									id="Path_5"
									data-name="Path 5"
									d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6.018,6.018,0,0,1,8,14ZM9,7.6l2.7,2.7-1.4,1.4L7,8.4V3H9Z"
									transform="translate(274 998)"
									fill="#cbd0d3"
								/>
							</g>
						</g>
					</svg>
				</TextCard.Content>
			</Row>
		</TextCard.Background>
	)
}
