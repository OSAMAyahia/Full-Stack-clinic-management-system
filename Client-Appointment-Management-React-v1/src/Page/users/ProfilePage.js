import React from 'react';
import ProfileComponents from '../../Components/users/ProfileComponents';
import PermanentDrawerLeft from '../../DrawerDoctor';
import {Grid2} from '@mui/material'; // استيراد Grid2 من المسار غير المستقر

const ProfilePage = () => {
  return (
    <div>
      <Grid2   spacing={3}>
        <Grid2 item xs={4}>
           <PermanentDrawerLeft />
        </Grid2>
        <Grid2 item xs={8}>
          <ProfileComponents />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default ProfilePage;
