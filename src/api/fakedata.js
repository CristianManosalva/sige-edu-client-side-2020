const news = [
  {
    urlImage:
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'informes en tiempo real',
  },
  {
    urlImage:
      'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'desde tu celular',
  },
  {
    urlImage:
      'https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Tareas Automaticas',
  },
]

const grupos = [
  '6-1 mañana',
  '7-1 mañana',
  '8-2 tarde',
  'Preescola',
  '3-1 mañana',
  '5-2 Tarde',
  'BBA',
]

const materias = ['matematica', 'ciencias naturales', 'español', 'ingles']
const clients = [
  // {
  //   urlImage:
  //     'https://res.cloudinary.com/duyflkcyn/image/upload/v1587040139/bjcvnyjhk7xnln24gevp-removebg-preview_krbgkv.png',
  //   title: 'Central de Bachillerato Integrado',
  // },
  // {
  //   urlImage:
  //     'http://alfredobonillajamundi.com/images/Abmlogo.png',
  //   title: 'Alfredo Bonilla Montaño',
  // },
  // {
  //   urlImage:
  //     'https://res.cloudinary.com/duyflkcyn/image/upload/v1587040139/bjcvnyjhk7xnln24gevp-removebg-preview_krbgkv.png',
  //   title: 'central de bachillerato integrado',
  // },
  // {
  //   urlImage:
  //     'https://res.cloudinary.com/duyflkcyn/image/upload/v1587040139/bjcvnyjhk7xnln24gevp-removebg-preview_krbgkv.png',
  //   title: 'central de bachillerato integrado',
  // },
]

const sampleLucho = [
  {
    codeWorkSpace: 1,
    nameWorkSpace: 'Ingles Work Space',
    descriptionWorkSpace: 'Area de prueba',
    academicCharge: {
      codeAcademicCharge: 1,
      teacherDictate: 1,
      courseDictate: 1,
      groupDictate: 2020,
      hourlyintensity: 4,
      schedule: [
        {
          codeTimeTable: 1,
          dayTimeTable: 'Lunes',
          startHourTimeTable: '08:00',
          endHourTimeTable: '10:00',
          courseTimeTable: 1,
        },
        {
          codeTimeTable: 2,
          dayTimeTable: 'Martes',
          startHourTimeTable: '08:00',
          endHourTimeTable: '10:00',
          courseTimeTable: 1,
        },
      ],
    },
    secctions: [
      {
        codeSecction: 1,
        nameSecction: 'Tarea de Prueba',
        descriptionSecction: 'subir archivo de prueba',
        uploadOnSecction: '2020-04-26T23:50:32.935220Z',
        workspaceSecction: 1,
        resources: [
          {
            codeResouce: 1,
            resource: null,
            secctionResource: 1,
          },
          {
            codeResouce: 2,
            resource:
              'http://127.0.0.1:8000/media/resources/Copia_de_Requerimientos_CMR_-_Requerimientos_Funcionales.pdf',
            secctionResource: 1,
          },
        ],
        lynks: [
          {
            codeHyperLink: 1,
            url: 'https://app.diagrams.net/#G1VmBivWaUDpWYTfCCBvknxnAJhyIAyYSS',
            secctionHyperlink: 1,
          },
        ],
      },
    ],
  },
]

const respuestaBuena = {
  grupos: [
    {
      grupo_id: '2',
      nombre_grupo: '6-2 tarde',
      materias: [
        {
          name: 'ingles',
          id: '1',
        },
      ],
    },
    {
      grupo_id: '4',
      nombre_grupo: '6-4 tarde',
      materias: [
        {
          name: 'español',
          id: '2',
        },
      ],
    },
  ],
}

const grupos2 = [
  { prescolar: ['matematica', 'ciencias naturales', 'español', 'ingles'] },
]

const contact = [
  {
    url: 'facebook.com',
    name: 'facebook',
    icon:
      'https://res.cloudinary.com/duyflkcyn/image/upload/v1587062834/SIGE/Icons/facebook_64px_stu7xs.png',
  },
  {
    url: 'instagram.com',
    name: 'instagram',
    icon:
      'https://res.cloudinary.com/duyflkcyn/image/upload/v1587062835/SIGE/Icons/instagram_64px_oitoia.png',
  },
  {
    url: 'linkedin.com',
    name: 'linkedin',
    icon:
      'https://res.cloudinary.com/duyflkcyn/image/upload/v1587062835/SIGE/Icons/linkedin_64px_m3ehvt.png',
  },
  {
    url: 'youtube.com',
    name: 'youtube',
    icon:
      'https://res.cloudinary.com/duyflkcyn/image/upload/v1587062835/SIGE/Icons/youtube_64px_ymdaz4.png',
  },
]
export { news, clients, contact, grupos, materias }
