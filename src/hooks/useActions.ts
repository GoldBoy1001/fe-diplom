import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'

import {showByAction} from '../store/showBy/showBy.slice'


const Allactions = {
	...showByAction
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(Allactions, dispatch)
}