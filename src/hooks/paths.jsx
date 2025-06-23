import { BookmarksIcon, ExploreIcon, HomeIcon, ListIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from "../assets/icons";
import { Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from "../pages";

export const path = {
    login: '/',
    home:'/',
    explore: '/explore',
    notifications: '/notifications',
    profile: '/profile',
    messages: '/messages',
    more: '/more',
    lists: '/lists',
    bookmarks: '/bookmarks',
}

export const NavListItems = [
    {
        id: 1,
        title: 'Home',
        path: path.home,
        icon: <HomeIcon/>,
        element: <Home/>
    },
    {
        id: 2,
        title: 'Explore',
        path: path.explore,
        icon: <ExploreIcon/>,
        element: <Explore/>
    },
    {
        id: 3,
        title: 'Notifications',
        path: path.notifications,
        icon: <NotificationIcon/>,
        element: <Notifications/>
    },
    {
        id: 4,
        title: 'Messages',
        path: path.messages,
        icon: <MessagesIcon/>,
        element: <Messages/>
    },
    {
        id: 5,
        title: 'Bookmarks',
        path: path.bookmarks,
        icon: <BookmarksIcon/>,
        element: <Bookmarks/>
    },
    {
        id: 6,
        title: 'Lists',
        path: path.lists,
        icon: <ListIcon/>,
        element: <Lists/> 
    },
    {
        id: 7,
        title: 'Profile',
        path: path.profile,
        icon: <ProfileIcon/>,
        element: <Profile/>
    },
    {
        id: 8,
        title: 'More',
        path: path.more,
        icon: <MoreIcon/>,
        element: <More/>
    }
]