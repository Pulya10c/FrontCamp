import BaseView from './common/BaseView';

class View extends BaseView {
  constructor() {
    super();
    this.app = this.getElement('#root');

    this.header = this.createElement('header', 'header');

    this.title = this.createElement('h1', 'main-title');
    this.title.textContent = 'FrontCamp NewsApi';

    this.attributionLink = this.createElement('a', 'attribution-link');
    this.attributionLink.textContent = '© NewsApi';
    this.attributionLink.href = 'https://newsapi.org/';
    this.attributionLink.target = '_blank';

    this.header.append(this.title, this.attributionLink);

    this.main = this.createElement('main', 'main');
    this.form = this.createElement('form', 'query-form');

    this.selectQuerySource = this.createElement('select', 'query-source-select');
    this.selectQuerySource.value = '';

    this.inputQueryText = this.createElement('input', 'input-query-text');
    this.inputQueryText.type = 'text';
    this.inputQueryText.placeholder = 'Search articles';

    this.inputQueryLanguageCheckbox = this.createElement('input', 'input-query-language-checkbox');
    this.inputQueryLanguageCheckbox.type = 'checkbox';

    this.labelInputQueryLanguageCheckbox = this.createElement('label', 'label-input-query-language-checkbox');
    this.labelInputQueryLanguageCheckbox.textContent = 'Search only in English';
    this.labelInputQueryLanguageCheckbox.append(this.inputQueryLanguageCheckbox);

    this.searchButton = this.createElement('button', 'search-button');
    this.searchButton.textContent = 'Search';
    this.searchButton.disabled = true;

    this.form.append(this.selectQuerySource, this.inputQueryText, this.labelInputQueryLanguageCheckbox, this.searchButton);

    this.articlesList = this.createElement('ul', 'articles-list');

    this.main.append(this.form, this.articlesList);
    this.app.append(this.header, this.main);

    this.getMoreArticlesButton = this.createElement('button', 'get-more-button');
    this.getMoreArticlesButton.textContent = 'Get More Articles';
  }

  updateDisabledSearchButton = ({ selectedSource, inputQueryText }) => {
    this.searchButton.disabled = !selectedSource && !inputQueryText;
  };

  renderErrorPopup = async message => {
    this.errorComponent = await import('./common/Error');
    const Error = this.errorComponent.default;
    this.error = new Error();
    this.error.setMessage(message);
    this.error.insertInto(this.app);
  };

  renderSources = sources => {
    const fragment = document.createDocumentFragment();

    const emptyOption = this.createElement('option', 'option-source');
    emptyOption.value = '';
    emptyOption.textContent = '';
    fragment.appendChild(emptyOption);

    sources.forEach(({ name, id }) => {
      const option = this.createElement('option', 'option-source');
      option.value = id;
      option.textContent = name;

      fragment.appendChild(option);
    });
    this.selectQuerySource.append(fragment);
  };

  updateArticlesRender = ({ articles, totalResults, page, articlesPerPage }) => {
    this._renderArticlesList(articles);
    if (totalResults < articlesPerPage * page) {
      // this.observer.unobserve(this.getMoreArticlesButton);
      this.getMoreArticlesButton.remove();
    }
  };

  render = ({ articles, totalResults, page, articlesPerPage }) => {
    if (this.error) {
      this.error.destroy();
    }

    while (this.articlesList.firstChild) {
      this.articlesList.removeChild(this.articlesList.firstChild);
    }

    if (this.app.contains(this.getMoreArticlesButton)) {
      // this.observer.unobserve(this.getMoreArticlesButton);
      this.getMoreArticlesButton.remove();
    }

    if (articles.length === 0) {
      const li = this.createElement('li', 'nothing-to-display');
      li.textContent = 'Nothing to display according to your query';
      this.articlesList.append(li);

      if (this.app.contains(this.getMoreArticlesButton)) {
        // this.observer.unobserve(this.getMoreArticlesButton);
        this.getMoreArticlesButton.remove();
      }
    } else {
      this._renderArticlesList(articles);
      if (totalResults > articlesPerPage * page) {
        this.app.append(this.getMoreArticlesButton);
        // this.observer = new IntersectionObserver(
        //   ([entry]) => {
        //     if (entry.isIntersecting === false) return;
        //     debugger;
        //     this.observerHandler();
        //   },
        //   { root: this.app, threshold: 0.9 }
        // );
        // this.observer.observe(this.getMoreArticlesButton);
      }
    }
  };

  _renderArticlesList = articles => {
    const fragment = document.createDocumentFragment();
    articles.forEach(({ title, urlToImage, content, description, url }) => {
      const article = this.createElement('li', 'article');
      const articleTitle = this.createElement('h3', 'article-title');

      const articleLink = this.createElement('a', 'article-link');
      articleLink.href = `${url}`;
      articleLink.target = '_blank';

      const linkTitle = this.createElement('span', 'link-title');
      linkTitle.textContent = `${title}`;

      const articleImage = this.createElement('img', 'article-image');
      if (urlToImage) {
        articleImage.src = `${urlToImage}`;
      }
      articleImage.alt = `${title}`;
      articleLink.append(linkTitle, articleImage);

      articleTitle.append(articleLink);

      const articleDescription = this.createElement('p', 'article-content');
      articleDescription.textContent = `${description ? description : content}`;

      article.append(articleTitle, articleDescription);
      fragment.appendChild(article);
    });
    this.articlesList.append(fragment);
  };

  bindSelectQuerySourceChanged = handler => {
    this.selectQuerySource.addEventListener('change', event => {
      const { target } = event;
      handler(target.value);
    });
  };

  bindCheckboxChanged = handler => {
    this.inputQueryLanguageCheckbox.addEventListener('change', event => {
      const { target } = event;
      handler(target.checked);
    });
  };

  bindInputQueryTextChanged = handler => {
    this.inputQueryText.addEventListener('input', event => {
      const { target } = event;
      handler(target.value);
    });
  };

  // bindGetMoreArticlesIntersectedObserver = handler => {
  //   this.observerHandler = handler;
  // };

  bindGetMoreArticlesButtonClick = handler => {
    this.getMoreArticlesButton.addEventListener('click', () => {
      handler();
    });
  };

  bindSearchArticlesClick = handler => {
    this.searchButton.addEventListener('click', event => {
      event.preventDefault();
      handler();
    });
  };
}

export default View;
