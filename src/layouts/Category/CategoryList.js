import AddCv from '../../pages/cv/AddCv'
import CvList from '../../pages/cv/CvList'
import AddPerson from '../../pages/person/AddPerson'
import PersonListV2 from '../../pages/person/PersonListV2'
import Post from '../../pages/person/Post'

export const CategoryType = {
    CV: 'cv',
    KISI: 'kisi'
};

export const CategoryList = [
    {
        categoryId: 1,
        categoryName: "Cv Listesi",
        categoryType: CategoryType.CV,
        path: '/cv/listesi',
        component: CvList
    },
    {   categoryId: 2, 
        categoryName: "Cv Oluştur", 
        categoryType: CategoryType.CV, 
        path: '/cv/olustur', 
        component: AddCv 
    },
    {   categoryId: 3, 
        categoryName: "Kişi Listesi", 
        categoryType: CategoryType.KISI, 
        path: '/kisi/listesi', 
        component: PersonListV2 
    },
    {   categoryId: 4, 
        categoryName: "Kişi Ekle", 
        categoryType: CategoryType.KISI, 
        path: '/kisi/ekle', 
        component: AddPerson 
    },
    {   categoryId: 5, 
        categoryName: "Post", 
        categoryType: CategoryType.KISI, 
        path: '/kisi/post', 
        component: Post
    }
];