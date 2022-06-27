import React from 'react'

export const LogoServers = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='120'
			height='50'
			fill='none'
			viewBox='0 30 140 50'
		>
			<path fill='url(#pattern0)' d='M15 42H130V72H15z'></path>
			<mask
				id='mask0_0_90'
				style={{ maskType: 'alpha' }}
				width='115'
				height='30'
				x='15'
				y='42'
				maskUnits='userSpaceOnUse'
			>
				<path fill='url(#pattern1)' d='M15 42H130V72H15z'></path>
			</mask>
			<g mask='url(#mask0_0_90)'>
				<path fill='#000' fillOpacity='0.01' d='M15 42H130V72H15z'></path>
			</g>
			<defs>
				<pattern
					id='pattern0'
					width='1'
					height='1'
					patternContentUnits='objectBoundingBox'
				>
					<use transform='scale(.0087 .03333)' xlinkHref='#image0_0_90'></use>
				</pattern>
				<pattern
					id='pattern1'
					width='1'
					height='1'
					patternContentUnits='objectBoundingBox'
				>
					<use transform='scale(.0087 .03333)' xlinkHref='#image0_0_90'></use>
				</pattern>
				<image
					id='image0_0_90'
					width='115'
					height='30'
					xlinkHref='data:image/png;base64,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'
				></image>
			</defs>
		</svg>
	)
}
