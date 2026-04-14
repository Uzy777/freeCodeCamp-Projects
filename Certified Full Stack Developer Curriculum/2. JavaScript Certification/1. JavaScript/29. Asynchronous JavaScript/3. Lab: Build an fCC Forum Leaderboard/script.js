const forumLatest =
    'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
    299: { category: 'Career Advice', className: 'career' },
    409: { category: 'Project Feedback', className: 'feedback' },
    417: { category: 'freeCodeCamp Support', className: 'support' },
    421: { category: 'JavaScript', className: 'javascript' },
    423: { category: 'HTML - CSS', className: 'html-css' },
    424: { category: 'Python', className: 'python' },
    432: { category: 'You Can Do This!', className: 'motivation' },
    560: { category: 'Back-End Development', className: 'backend' }
};

const timeAgo = (timestamp) => {
    const now = new Date();
    const then = new Date(timestamp);

    const diffMs = now - then;
    const diffMinutes = Math.floor(diffMs / 60000);

    if (diffMinutes < 60) {
        return `${diffMinutes}m ago`;
    }

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) {
        return `${diffHours}h ago`;
    }

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
};

const viewCount = (views) => {
    if (views >= 1000) {
        return `${Math.floor(views / 1000)}k`;
    }
    return views;
};

const forumCategory = (categoryid) => {
    const selected = allCategories[categoryid];

    const categoryText = selected ? selected.category : "General";
    const className = selected ? selected.className : "general";

    return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${categoryid}">${categoryText}</a>`;
};

const avatars = (posters, users) => {
    return posters
        .map((poster) => {
            const user = users.find((u) => u.id === poster.user_id);
            if (!user) return "";

            const sizedTemplate = user.avatar_template.replace("{size}", 30);

            const src = sizedTemplate.startsWith("/")
                ? `${avatarUrl}${sizedTemplate}`
                : sizedTemplate;

            return `<img src="${src}" alt="${user.name}">`;
        })
        .join("");
};

const showLatestPosts = (data) => {
    const { users, topic_list } = data;
    const { topics } = topic_list;

    const rows = topics.map((topic) => {
        const {
            id,
            title,
            views,
            posts_count,
            slug,
            posters,
            category_id,
            bumped_at
        } = topic;

        return `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(posters, users)}
          </div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `;
    });

    document.querySelector("#posts-container").innerHTML = rows.join("");
};

const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);
        const data = await res.json();
        showLatestPosts(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData();
``