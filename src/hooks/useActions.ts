import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'

import {showByAction} from '../store/showBy/showBy.slice'
import { cityAction } from '../store/city/cyty.slice'
import { curentPaginateByAction } from '../store/curentPaginate/curentPaginate.slice'
import { sortByAction } from '../store/sort/sort.slice'
import { extrasByAction } from '../store/extras/extras.slice'
import { priceAction } from '../store/price/price.slice'
import { timeAction } from '../store/time/time.slice'
import { choiceOfPlaceByAction } from '../store/choiceOfPlace/choiceOfPlace.slice'
import { directionAction } from '../store/direction/direction.slice'

const Allactions = {
	...showByAction,
	...cityAction,
	...curentPaginateByAction,
	...sortByAction,
	...extrasByAction,
	...priceAction,
	...timeAction,
	...choiceOfPlaceByAction,
	...directionAction
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(Allactions, dispatch)
}