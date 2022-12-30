import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const Stories = () => {
  return (
    <StoriesWrapper>
        <Story 
            image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            profileSrc="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
            title="Nguyễn Thanh"
        />
        <Story 
            image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            profileSrc="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
            title="Nguyễn Thanh"        />
        <Story 
            image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            profileSrc="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
            title="Nguyễn Thanh"        />
    </StoriesWrapper>
  )
}

const StoriesWrapper = styled.div`
    display: flex;
`

export default Stories