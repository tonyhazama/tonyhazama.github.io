/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */

 import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { funProjects, workProjects, tagList } from '../../const';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';

const projects = {
  work: workProjects,
  fun: funProjects
};

const labels = {
  id: {
    scope: 'Scope',
    summary: 'Summary',
    tags: 'Stacks',
    goBack: 'Go Back',
  },
  en: {
    scope: 'Scope',
    summary: 'Summary',
    tags: 'Stacks',
    goBack: 'Go Back',
  },
};

export default function ProjectDetail(props) {
  const router = useRouter();
  const { type, projectId } = router.query;
  // const [project, setProject] = useState();
  let project;
  const label = labels.en;
  if (type && projectId) {
    project = projects[type][projectId];
    // setProject(projects[type][projectId]);
  }

  useEffect(() => {
    if (!type && !projectId) {
      router.push('/');
    }
  }, []);
  
  return (
    <div className="root">
      <Head>
        <title>Project</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {project && <div className="content project-detail">
        <div className="container" style={{height: '100%'}}>
          <div className="project-desc">
            <div>
              <Link href={`/`}>
                <div className="custom-link">
                  <ArrowLeftOutlined style={{marginRight: '1em'}} />
                  <span>{label.goBack}</span>  
                </div>
              </Link>
            </div>
            <div className="heading">
              <h1 className="title">{project.title}</h1>
              <span className="label" style={{marginBottom: '0px'}}>{project.type || 'Project Type'}</span>
              <p className="text">{project.year || '-'}</p>
            </div>
            <div className="scope">
              <span className="label">{label.scope}</span>
              {project.scope && project.scope.map((scope, i) => {
                return (
                  <p className="text" key={`scopeItem${i}`}>{scope}</p>
                )
              })}
            </div>
            <div className="summary">
              <span className="label">{label.summary}</span>
              <p className="text">{project.description}</p>
              <div className="tags">
                {project.tags && project.tags.map((tag, i) => {
                  return <span key={`tagItem${i}`}>{tagList[tag]}</span>
                })}
              </div>
            </div>
          </div>
          <div className="project-picture">
            <img src={project.thumbnail} />
          </div>
          <div className="project-snapshot">
            {project.snapshot && project.snapshot.map((sPic, i) => {
              return (
                <div className="snapshot-item" key={`snapshotItem${i}`}>
                  <img src={sPic} />
                </div>
              )
            })}
          </div>
        </div>
      </div>}
    </div>
  )
}