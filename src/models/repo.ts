export interface RepoTagResponse {
  name: string;
  zipball_url: string;
  commit: CommitInfo;
  node_id: string;
}

export interface CommitInfo {
  sha: string;
  url: string;
}
