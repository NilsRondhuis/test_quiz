import refs from "./refs";

const changePage = (data, page) => {
  refs.allPages.textContent = data.length;
  refs.currentPage.textContent = `${page} /`;
};

export default changePage;
