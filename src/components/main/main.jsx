import { useState, useEffect } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import { Category, Videos } from '../'
import {ApiService} from '../../service/api.service'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = category => setSelectedCategory (category)

  useEffect (() => {
      ApiService.fetching('search').then(data => setVideos(data))
       
  }, [])

  return (
  <Stack>
    <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} /> 
    <Box p={2} sx={{height: '90vh' }}>
    <Container maxWidth={'90%'}>
      <Typography variant={'h4'} fontWeight={'bold'} mb={2} >
        {selectedCategory} <span style={{color: colors.secondary}}>Videos</span>
      </Typography>
      <Videos />
      {videos.items.map(c => c.kind)}
    </Container>
    </Box>
  </Stack> 
  )

}

export default Main