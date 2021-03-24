export default interface IPostListProps {
    posts: { id: String, title: String, subposts: { subtitle: String, text: { textTitle: String, textContent: String }[] } }[];

 }