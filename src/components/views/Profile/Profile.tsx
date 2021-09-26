import { FC } from 'react';
import { AuthService } from '../../../services/auth.service';
import './Profile.scss';

import VBox from '../../helpers/VBox';

import { Avatar, Label, TextInput } from 'evergreen-ui';

const Profile: FC = () => {
  const session = AuthService.GetSession();

  return (
    <div className="Profile">
      <VBox maxWidth={280} margin="auto">
        <Avatar
          src={session?.photo}
          name={session?.displayName}
          size={100}
          marginBottom={10} />

        <VBox alignItems="start" marginBottom={10}>
          <Label marginBottom={5}>Full Name</Label>
          <TextInput defaultValue={session?.displayName} />
        </VBox>

        <VBox alignItems="start" marginBottom={10}>
          <Label marginBottom={5}>Email</Label>
          <TextInput defaultValue={session?.email} readOnly />
        </VBox>

        <VBox alignItems="start" marginBottom={10}>
          <Label marginBottom={5}>Uid</Label>
          <TextInput defaultValue={session?.uid} readOnly />
        </VBox>
      </VBox>
    </div>
  )
};

export default Profile;
