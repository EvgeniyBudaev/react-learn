import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({adapter: new Adapter()})
import {restaurants} from '../../fixtures'
import Reviews from './reviews'

const reviews = restaurants[0].reviews

describe('Reviews', () => {
	it('should render reviews', () => {
		const component = mount(<Reviews reviews={reviews} />)
		expect(component.find('div[data-test="review"]').length).toBe(2)
	})
})
