
import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Toolbar, Grid } from '@mui/material';
import { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Guide from "../../assets/Guide.png"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import Chip from '@mui/material/Chip';
import BoardData from "../../components/Board/BoardData"


//검색창 스타일링
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: '2px solid #5784F7',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#5784F7',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 0),
    marginLeft: `calc(1em + ${theme.spacing(6)})`,
    marginRight: `calc(1em + ${theme.spacing(1)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));  

const defaultTheme = createTheme();

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const navigate = useNavigate();
   
  //배너 스타일링
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#EEF2F9',  
      padding: "2rem"
    },
    image: {
      maxWidth: '100%',
      height: "100%"
    },
  }; 


  return (
    <ThemeProvider theme={defaultTheme}>
     
      <Toolbar sx={{ margin:'5rem 2rem 5rem 8rem', alignItems: 'center' }}>
        <Grid></Grid>
        <Grid container justifyContent="center">
         {/* 검색창 */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              style={{ color: '#898989', margin: 'auto' }} 
              placeholder="검색어를 입력하세요."
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Search>
        </Grid>
        {/* 아이콘 */}
        <PersonOutlineIcon  
        sx={{ fontSize: '40px', color: '#6E6E6E', marginRight: "1rem" }}
        onClick={()=>{navigate("/mypage")}}/>
        <MailOutlineIcon  
        sx={{ fontSize: '40px', color: '#6E6E6E' }} 
        onClick={()=>{navigate("/note")}}/>
      </Toolbar>
       {/* 배너 */}
          <Grid container style={styles.container}>
          <img src={Guide} alt="" style={styles.image} />
        </Grid>

    {/* 게시글 헤더 */}
      <Grid container direction="column" justifyContent="space-around" alignItems="center">
        <Grid container style={{ fontSize:'25px', padding: '3rem 1rem 2rem 1rem', fontWeight: 'bold', color: '#414141' }}>
      <Grid item xs={4} />
      <Grid item xs={4} style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        글 목록
      </Grid>
      <Grid item xs={4} style={{ textAlign: 'center'}}>
        <Chip
          style={{ fontSize: "20px", width: "10rem", height: "3rem"}}
          icon={<DriveFileRenameOutlineTwoToneIcon fontSize='large'/>}
          label="글쓰기"
          onClick={()=>{navigate("/createpost")}}
        />
      </Grid>
      </Grid>

       {/* 게시글 목록 */}
        <List sx={{ textAlign: 'center', width: '80%', margin: '1rem', bgcolor: 'background.paper' }}>
        {BoardData.map((post) => (
          <React.Fragment key={post.id}>
            <Grid container justifyContent="space-between" alignItems="center">
              <ListItem
                alignItems="center"
                onClick={() => {
                  navigate(`/post/${encodeURIComponent(post.id)}`);
                }}
              >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <div>
                <div style={{ margin: '20px' }}>
                  <ListItemText
                    primary={
                      <Typography variant="h5" style={{ fontSize: '1.5rem', textAlign: 'left' }}>
                        {post.title}
                      </Typography>
                    }
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </ListItem>
      </Grid>
        </React.Fragment>
      ))}
      </List>
            </Grid>
            
    </ThemeProvider>
  );
}
