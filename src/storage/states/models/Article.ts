import {Comment} from "./Comment";

export interface Article {
    id:number,
    title:string,
    subtitle:string,
    text:string,
    image: string,
    comments: Comment[],
    userid: number,
    date: string
}

const initialArticle = {
    id:0,
    title: "Sample title",
    subtitle: "Sample subtitle, sample subtitle, sample subtitle",
    image: "photo1.png",
    text:"Lorem ipsum dolor sit amet mauris. Donec odio non luctus ut, neque. Maecenas gravida, eros nec magna. Suspendisse dignissim in, commodo est et malesuada fames ac quam at fermentum pellentesque sed, dui. Morbi facilisis est eu urna risus ante ante, in ligula felis, interdum euismod ut, eleifend congue. Mauris interdum rhoncus, dui gravida ullamcorper varius quis, tincidunt eu, odio. Aenean ut mattis vel, nisl. Nam suscipit, velit nec erat volutpat. Pellentesque et orci ipsum, ultricies a, convallis justo. Nulla mollis tempus. Pellentesque fringilla enim. Maecenas mi id lorem vitae erat metus facilisis urna sit amet mauris. Ut sed porta turpis eget sem. Mauris nec pede convallis nisl, commodo sit amet felis. Phasellus consequat. Nulla hendrerit tellus tincidunt lorem. Cras a ante ullamcorper feugiat, quam eget sapien vitae massa. Donec elementum fringilla purus at est massa sit amet turpis eget odio. Morbi pede. Cras in nibh eu odio. Nam suscipit, velit sit amet magna. Nullam sapien. Donec nec nisl. Nam aliquet elit. Nam eget tempus enim. Sed quam et turpis. Mauris pretium varius, rutrum ligula, semper sollicitudin ac, blandit id, orci.",
    comments:[
        {user: 0, context: "Przykładowy komentarz nie wnoszący nic", date: "2020.01.23", time: "01:30:04"},
        {user: 0, context: "Przykładowy komentarz nie wnoszący nic2", date: "2020.01.24", time: "01:50:44"},
        {user: 1, context: "Przykładowy komentarz nie wnoszący nic3", date: "2020.01.03", time: "06:30:44"},
        {user: 0, context: "Przykładowy komentarz nie wnoszący nic4", date: "2020.11.23", time: "01:37:44"},
        {user: 1, context: "Przykładowy komentarz nie wnoszący nic5", date: "2020.06.23", time: "03:30:04"},
    ],
    userid:0,
    date: "30.01.2020"
}

export const initialArticles = [
    {
        id:0,
        title: "Sample title",
        subtitle: "Sample subtitle, sample subtitle, sample subtitle",
        image: "photo1.png",
        text:"Lorem ipsum dolor sit amet mauris. Donec odio non luctus ut, neque. Maecenas gravida, eros nec magna. Suspendisse dignissim in, commodo est et malesuada fames ac quam at fermentum pellentesque sed, dui. Morbi facilisis est eu urna risus ante ante, in ligula felis, interdum euismod ut, eleifend congue. Mauris interdum rhoncus, dui gravida ullamcorper varius quis, tincidunt eu, odio. Aenean ut mattis vel, nisl. Nam suscipit, velit nec erat volutpat. Pellentesque et orci ipsum, ultricies a, convallis justo. Nulla mollis tempus. Pellentesque fringilla enim. Maecenas mi id lorem vitae erat metus facilisis urna sit amet mauris. Ut sed porta turpis eget sem. Mauris nec pede convallis nisl, commodo sit amet felis. Phasellus consequat. Nulla hendrerit tellus tincidunt lorem. Cras a ante ullamcorper feugiat, quam eget sapien vitae massa. Donec elementum fringilla purus at est massa sit amet turpis eget odio. Morbi pede. Cras in nibh eu odio. Nam suscipit, velit sit amet magna. Nullam sapien. Donec nec nisl. Nam aliquet elit. Nam eget tempus enim. Sed quam et turpis. Mauris pretium varius, rutrum ligula, semper sollicitudin ac, blandit id, orci.",
        comments:[
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic", date: "2020.01.23", time: "01:30:04"},
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic2", date: "2020.01.24", time: "01:50:44"},
            {user: 1, context: "Przykładowy komentarz nie wnoszący nic3", date: "2020.01.03", time: "06:30:44"},
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic4", date: "2020.11.23", time: "01:37:44"},
            {user: 1, context: "Przykładowy komentarz nie wnoszący nic5", date: "2020.06.23", time: "03:30:04"}
        ],
        userid: 2,
        date: "30.01.2020"
    },
    {
        id:1,
        title: "Sample title22222",
        subtitle: "Sample subtitle, sample subtitle, sample subtitle22222",
        image: "plant0.jpg",
        text:"Lorem ipsum dolor sit amet mauris. Donec odio non luctus ut, neque. Maecenas gravida, eros nec magna. Suspendisse dignissim in, commodo est et malesuada fames ac quam at fermentum pellentesque sed, dui. Morbi facilisis est eu urna risus ante ante, in ligula felis, interdum euismod ut, eleifend congue. Mauris interdum rhoncus, dui gravida ullamcorper varius quis, tincidunt eu, odio. Aenean ut mattis vel, nisl. Nam suscipit, velit nec erat volutpat. Pellentesque et orci ipsum, ultricies a, convallis justo. Nulla mollis tempus. Pellentesque fringilla enim. Maecenas mi id lorem vitae erat metus facilisis urna sit amet mauris. Ut sed porta turpis eget sem. Mauris nec pede convallis nisl, commodo sit amet felis. Phasellus consequat. Nulla hendrerit tellus tincidunt lorem. Cras a ante ullamcorper feugiat, quam eget sapien vitae massa. Donec elementum fringilla purus at est massa sit amet turpis eget odio. Morbi pede. Cras in nibh eu odio. Nam suscipit, velit sit amet magna. Nullam sapien. Donec nec nisl. Nam aliquet elit. Nam eget tempus enim. Sed quam et turpis. Mauris pretium varius, rutrum ligula, semper sollicitudin ac, blandit id, orci.",
        comments:[
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic", date: "2020.01.23", time: "01:30:04"},
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic2", date: "2020.01.24", time: "01:50:44"}
        ],
        userid:0,
        date: "16.03.2021"
    },
    {
        id:2,
        title: "Sample title333333",
        subtitle: "Sample subtitle, sample subtitle, sample subtitle33333",
        image: "photo1.png",
        text:"Lorem ipsum dolor sit amet mauris. Donec odio non luctus ut, neque. Maecenas gravida, eros nec magna. Suspendisse dignissim in, commodo est et malesuada fames ac quam at fermentum pellentesque sed, dui. Morbi facilisis est eu urna risus ante ante, in ligula felis, interdum euismod ut, eleifend congue. Mauris interdum rhoncus, dui gravida ullamcorper varius quis, tincidunt eu, odio. Aenean ut mattis vel, nisl. Nam suscipit, velit nec erat volutpat. Pellentesque et orci ipsum, ultricies a, convallis justo. Nulla mollis tempus. Pellentesque fringilla enim. Maecenas mi id lorem vitae erat metus facilisis urna sit amet mauris. Ut sed porta turpis eget sem. Mauris nec pede convallis nisl, commodo sit amet felis. Phasellus consequat. Nulla hendrerit tellus tincidunt lorem. Cras a ante ullamcorper feugiat, quam eget sapien vitae massa. Donec elementum fringilla purus at est massa sit amet turpis eget odio. Morbi pede. Cras in nibh eu odio. Nam suscipit, velit sit amet magna. Nullam sapien. Donec nec nisl. Nam aliquet elit. Nam eget tempus enim. Sed quam et turpis. Mauris pretium varius, rutrum ligula, semper sollicitudin ac, blandit id, orci.",
        comments:[],
        userid:1,
        date: "16.03.1779"
    },
    {
        id:3,
        title: "Sample title44444",
        subtitle: "Sample subtitle, sample subtitle, sample subtitle444444",
        image: "photo1.png",
        text:"Lorem ipsum dolor sit amet mauris. Donec odio non luctus ut, neque. Maecenas gravida, eros nec magna. Suspendisse dignissim in, commodo est et malesuada fames ac quam at fermentum pellentesque sed, dui. Morbi facilisis est eu urna risus ante ante, in ligula felis, interdum euismod ut, eleifend congue. Mauris interdum rhoncus, dui gravida ullamcorper varius quis, tincidunt eu, odio. Aenean ut mattis vel, nisl. Nam suscipit, velit nec erat volutpat. Pellentesque et orci ipsum, ultricies a, convallis justo. Nulla mollis tempus. Pellentesque fringilla enim. Maecenas mi id lorem vitae erat metus facilisis urna sit amet mauris. Ut sed porta turpis eget sem. Mauris nec pede convallis nisl, commodo sit amet felis. Phasellus consequat. Nulla hendrerit tellus tincidunt lorem. Cras a ante ullamcorper feugiat, quam eget sapien vitae massa. Donec elementum fringilla purus at est massa sit amet turpis eget odio. Morbi pede. Cras in nibh eu odio. Nam suscipit, velit sit amet magna. Nullam sapien. Donec nec nisl. Nam aliquet elit. Nam eget tempus enim. Sed quam et turpis. Mauris pretium varius, rutrum ligula, semper sollicitudin ac, blandit id, orci.",
        comments:[
            {user: 1, context: "Przykładowy komentarz nie wnoszący nic3", date: "2020.01.03", time: "06:30:44"},
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic4", date: "2020.11.23", time: "01:37:44"},
            {user: 1, context: "Przykładowy komentarz nie wnoszący nic5", date: "2020.06.23", time: "03:30:04"}
        ],
        userid:0,
        date: "13.05.1999"
    },
    {
        id:4,
        title: "Sample title555555555",
        subtitle: "Sample subtitle, sample subtitle555555",
        image: "plant0.jpg",
        text:"Lorem ipsum dolor sit amet mauris. Donec odio non luctus ut, neque. Maecenas gravida, eros nec magna. Suspendisse dignissim in, commodo est et malesuada fames ac quam at fermentum pellentesque sed, dui. Morbi facilisis est eu urna risus ante ante, in ligula felis, interdum euismod ut, eleifend congue. Mauris interdum rhoncus, dui gravida ullamcorper varius quis, tincidunt eu, odio. Aenean ut mattis vel, nisl. Nam suscipit, velit nec erat volutpat. Pellentesque et orci ipsum, ultricies a, convallis justo. Nulla mollis tempus. Pellentesque fringilla enim. Maecenas mi id lorem vitae erat metus facilisis urna sit amet mauris. Ut sed porta turpis eget sem. Mauris nec pede convallis nisl, commodo sit amet felis. Phasellus consequat. Nulla hendrerit tellus tincidunt lorem. Cras a ante ullamcorper feugiat, quam eget sapien vitae massa. Donec elementum fringilla purus at est massa sit amet turpis eget odio. Morbi pede. Cras in nibh eu odio. Nam suscipit, velit sit amet magna. Nullam sapien. Donec nec nisl. Nam aliquet elit. Nam eget tempus enim. Sed quam et turpis. Mauris pretium varius, rutrum ligula, semper sollicitudin ac, blandit id, orci.",
        comments:[
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic", date: "2020.01.23", time: "01:30:04"},
            {user: 0, context: "Przykładowy komentarz nie wnoszący nic2", date: "2020.01.24", time: "01:50:44"},
            {user: 1, context: "Przykładowy komentarz nie wnoszący nic5", date: "2020.06.23", time: "03:30:04"}
        ],
        userid:1,
        date: "19.05.2009"

    }
]