'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity/sanity.config';

const AdminPage = () => <NextStudio config={config} />;

export default AdminPage;
