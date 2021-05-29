//Next Specific Hooks - similar to react hooks
import { useRouter } from 'next/router';

function DetailPage () {
    const router = useRouter();

    //console.log(router.query.newsId); //to get the router param in nextjs

    const newId = router.query.newsId;

    return <h1>This is { newId } Page</h1>
}

export default DetailPage;