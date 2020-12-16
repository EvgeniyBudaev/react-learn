import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({adapter: new Adapter()})
import {restaurants} from '../../../fixtures'
import Review from './review'

const review = restaurants[0].reviews[1]

describe('Review', () => {
	let component, name, text, rate

	beforeEach(() => {
		component = mount(<Review {...review} />)
		name = component.find('[data-test="review-user"]').text()
		text = component.find('[data-test="review-text"]').text()
		rate = component.find('[data-test="full-star"]').length
	})

	it('should render review', () => {
		expect(component.find('Review').length).toBe(1)
	})

	it('should render user name', () => {
		expect(name).toBe(review.user)
	})

	it('should render text', () => {
		expect(text).toBe(review.text)
	})

	it(`should render ${review.rating} fulled stars`, () => {
		expect(rate).toBe(review.rating)
	})
})

describe('Anonymous Review', () => {
	let component, name

	beforeEach(() => {
		component = mount(<Review text={review.text} rating={review.rating} />)
		name = component.find('[data-test="review-user"]').text()
	})

	it('should render anonymous name', () => {
		expect(name).toBe('Anonymous')
	})
})
