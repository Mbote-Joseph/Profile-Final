// Copyright 2025 josephmbote
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { PersonalInfo } from './pages/personal-info/personal-info';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Experience } from '../components/profile/experience/experience';


export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'personal-info' },

      { path: 'personal-info', component: PersonalInfo},
      { path: 'skills', component: Skills },
      { path: 'projects', component: Projects },
      { path: 'experience', component: Experience },
    ],
  },
];
