import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from '@mui/material'
export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }}
        cols={3} rowHeight={164}>
        {
          itemData.map((item) => (
            <ImageListItem key={item.title}>
              <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title} loading='lazy' />
                <ImageListItemBar title={item.title}/>
            </ImageListItem>
          ))
        }
      </ImageList>
      <ImageList variant='woven' sx={{ width: 500, height: 450 }}
        cols={3} gap={8}>
        {
          itemData.map((item) => (
            <ImageListItem key={item.title}>
              <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title} loading='lazy' />
            </ImageListItem>
          ))
        }
      </ImageList>
      <Box sx={{width:500, height:450, overflowY:'scroll'}}>
        <ImageList variant='masonry' cols={3} gap={8}>
          {
            itemData.map((item) => (
              <ImageListItem key={item.title}>
                <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                  alt={item.title} loading='lazy' />
              </ImageListItem>
            ))
          }
        </ImageList>
      </Box>
    </Stack>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0',
    title: 'phone1'
  },
  {
    img: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0',
    title: 'phone2'
  },
  {
    img: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0',
    title: 'phone3'
  },
  {
    img: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0',
    title: 'phone4'
  },
  {
    img: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0',
    title: 'phone5'
  },
  {
    img: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0',
    title: 'phone6'
  },
  {
    img: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0',
    title: 'phone7'
  },
]
