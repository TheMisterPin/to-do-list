import React from 'react';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import ChecklistRtlTwoToneIcon from '@mui/icons-material/ChecklistRtlTwoTone';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';


export const SidebarData = [
  {
    title: 'Notes',
    icon: <AssignmentOutlinedIcon fontSize="large"/>,
    link: '/notes',
  },

  {
    title: 'important',
    icon: <LabelImportantTwoToneIcon  fontSize="large"/>,
    link: '/important',
  },

  {
    title: 'tasks',
    icon: <TaskAltOutlinedIcon fontSize="large"/>,
    link: '/tasks',
  },

  {
    title: 'completed',
    icon: <TaskOutlinedIcon fontSize="large"/>,
    link: '/notes',
  },
];
