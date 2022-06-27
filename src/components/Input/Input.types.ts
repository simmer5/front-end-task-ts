import React from 'react'

export type InputProps = {
	type: string
	placeholder: string
	required: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => string
	children: React.ReactNode
}
